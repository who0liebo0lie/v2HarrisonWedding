const HEADERS = {
  RSVP: ['Timestamp','Invite Token','Full Name','Email','Phone','Attending','Booking Number','Dietary','Activities','Bingo Clue','Bingo Consent','Notes'],
  QUESTIONS: ['Timestamp','Invite Token','Full Name','Email','Message','Status'],
  GUESTS: ['Invite Token','Greeting','Phone','Email','Sent At','Delivery Status']
};

function setupWeddingBackend() {
  const p = PropertiesService.getScriptProperties();
  const id = p.getProperty('SPREADSHEET_ID');
  const ss = id ? SpreadsheetApp.openById(id) : SpreadsheetApp.create('Julia & Wesley Wedding Responses');
  if (!id) p.setProperty('SPREADSHEET_ID', ss.getId());
  ensureSheet_(ss, 'RSVP', HEADERS.RSVP);
  ensureSheet_(ss, 'Questions', HEADERS.QUESTIONS);
  ensureSheet_(ss, 'Guests', HEADERS.GUESTS);
  Logger.log('Spreadsheet: ' + ss.getUrl());
}

function doPost(e) {
  try {
    const formType = String(e.parameter.formType || '').toLowerCase();
    if (formType === 'rsvp') return saveRsvp_(e.parameter, e.parameters);
    if (formType === 'question') return saveQuestion_(e.parameter);
    return responsePage_(false, formType, 'Unknown form type.');
  } catch (err) {
    console.error(err);
    return responsePage_(false, 'unknown', 'We could not save your submission. Please try again.');
  }
}

function doGet(e) {
  if (e.parameter.action === 'invite') return invitationLookup_(e.parameter);
  return ContentService.createTextOutput('Wedding backend is running.');
}

function saveRsvp_(p, ps) {
  const ss = getSpreadsheet_();
  const activities = (ps.activities || []).join(', ');
  ss.getSheetByName('RSVP').appendRow([new Date(),p.inviteToken||'',p.fullName||'',p.email||'',p.phone||'',p.attending||'',p.bookingNumber||'',p.dietary||'',activities,p.bingoClue||'',p.bingoConsent||'',p.notes||'']);
  const recipients = getNotificationRecipients_();
  const subject = `New wedding RSVP: ${p.fullName || 'Guest'}`;
  const body = `Name: ${p.fullName}\nAttending: ${p.attending}\nEmail: ${p.email}\nPhone: ${p.phone||''}\nActivities: ${activities}\nBingo clue: ${p.bingoClue||''}\nDietary: ${p.dietary||''}\nNotes: ${p.notes||''}`;
  MailApp.sendEmail(recipients, subject, body);
  if (p.email) MailApp.sendEmail(p.email, 'We received your RSVP', `Hi ${p.fullName || 'there'},\n\nThank you! Julia and Wesley received your RSVP. We cannot wait to celebrate with you aboard Harmony of the Seas.\n\n— Julia & Wesley`);
  return responsePage_(true, 'rsvp', 'Your RSVP was received. A confirmation email is on its way.');
}

function saveQuestion_(p) {
  const ss = getSpreadsheet_();
  ss.getSheetByName('Questions').appendRow([new Date(),p.inviteToken||'',p.fullName||'',p.email||'',p.message||'','New']);
  MailApp.sendEmail(getNotificationRecipients_(), `Wedding website question from ${p.fullName || 'a guest'}`, `From: ${p.fullName}\nEmail: ${p.email}\n\n${p.message}`);
  if (p.email) MailApp.sendEmail(p.email, 'We received your message', `Hi ${p.fullName || 'there'},\n\nJulia and Wesley received your message and will respond as soon as they can.\n\n— Julia & Wesley`);
  return responsePage_(true, 'question', 'Your message was sent to Julia and Wesley.');
}

function invitationLookup_(p) {
  const callback = String(p.callback || 'callback').replace(/[^a-zA-Z0-9_$]/g,'');
  const token = String(p.token || '');
  const sh = getSpreadsheet_().getSheetByName('Guests');
  const values = sh.getDataRange().getValues();
  let result = {found:false};
  for (let i=1;i<values.length;i++) if (String(values[i][0]) === token) { result={found:true,greeting:String(values[i][1]||'Friend')}; break; }
  return ContentService.createTextOutput(`${callback}(${JSON.stringify(result)});`).setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function sendInvitationTexts() {
  const p=PropertiesService.getScriptProperties();
  const sid=p.getProperty('TWILIO_ACCOUNT_SID'), token=p.getProperty('TWILIO_AUTH_TOKEN'), from=p.getProperty('TWILIO_FROM_NUMBER'), site=p.getProperty('SITE_URL');
  if(!sid||!token||!from||!site) throw new Error('Add TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, and SITE_URL to Script Properties.');
  const sh=getSpreadsheet_().getSheetByName('Guests'); const values=sh.getDataRange().getValues();
  for(let i=1;i<values.length;i++){
    const [inviteToken,greeting,phone,email,sentAt]=values[i]; if(!phone||sentAt) continue;
    const message=`Hi ${greeting}! Julia and Wesley are getting married aboard Harmony of the Seas, and we would love for you to join us. View your invitation: ${site}?invite=${encodeURIComponent(inviteToken)} Reply STOP to opt out.`;
    const response=UrlFetchApp.fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,{method:'post',payload:{To:phone,From:from,Body:message},headers:{Authorization:'Basic '+Utilities.base64Encode(sid+':'+token)},muteHttpExceptions:true});
    const ok=response.getResponseCode()>=200&&response.getResponseCode()<300; sh.getRange(i+1,5).setValue(new Date()); sh.getRange(i+1,6).setValue(ok?'Sent':`Error ${response.getResponseCode()}`); Utilities.sleep(1100);
  }
}

function responsePage_(ok, formType, message) {
  const payload=JSON.stringify({source:'julia-wesley-wedding',ok,formType,message});
  return HtmlService.createHtmlOutput(`<script>window.parent.postMessage(${payload}, '*');</script><p>${message}</p>`).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function getSpreadsheet_(){const id=PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');if(!id)throw new Error('Run setupWeddingBackend first.');return SpreadsheetApp.openById(id);}
function getNotificationRecipients_(){const r=PropertiesService.getScriptProperties().getProperty('NOTIFICATION_EMAILS');if(!r)throw new Error('Set NOTIFICATION_EMAILS in Script Properties.');return r;}
function ensureSheet_(ss,name,headers){let sh=ss.getSheetByName(name);if(!sh)sh=ss.insertSheet(name);if(sh.getLastRow()===0)sh.appendRow(headers);}

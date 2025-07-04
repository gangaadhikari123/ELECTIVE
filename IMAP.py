import imaplib

mail = imaplib.IMAP4_SSL("imap.gmail.com")
mail.login("adhikariganga2061@gmail.com", "your_password")

mail.select("inbox")
status, messages = mail.search(None, "ALL")

email_ids = messages[0].split()
print(f"You have {len(email_ids)} emails in your inbox.")

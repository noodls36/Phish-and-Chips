import type { CaseFile } from "../types/case";

export const cases: CaseFile[] = [
  {
    id: 14,
    difficulty: "Easy",
    from: "winner@prize-alerts.example",
    subject: "You won a $900 gift card",
    body: "Congratulations! Your email was selected for a special reward. Click the link below and enter your password to claim the card before midnight.",
    verdict: "phishing",
    hints: [
      "Look for pressure tactics and requests for sensitive information.",
      "A real prize notice should not ask for your email password.",
    ],
    explanation: {
      headline: "The message asks for a password to claim a prize.",
      detail:
        "Prize scams often use excitement and urgency to push people into giving away credentials. A legitimate company would not need your email password to deliver a gift card.",
      suspiciousSource: "winner@prize-alerts.example",
    },
  },
  {
    id: 15,
    difficulty: "Medium",
    from: "billing@streamnest.com",
    subject: "Your receipt for StreamNest",
    body: "Thanks for your monthly payment. Your receipt is attached. You can manage your plan from your account settings.",
    verdict: "legitimate",
    hints: [
      "Check whether the email asks you to take a risky action.",
      "Receipts that point users back to account settings are usually safer than emails demanding password entry.",
    ],
    explanation: {
      headline: "This email behaves like a normal receipt.",
      detail:
        "It does not pressure the reader, ask for credentials, or send them to an unrelated domain. It directs account changes to the normal account settings area.",
      trustedSource: "streamnest.com",
    },
  },
  {
    id: 23,
    difficulty: "Hard",
    from: "support@paypaI-security.com",
    subject: "Account Suspension Notice",
    body: "We detected unusual activity on your account. Your PayPal account will be suspended in 24 hours unless you verify your billing details immediately.",
    verdict: "phishing",
    hints: [
      "Check the sender address carefully.",
      "The domain contains a capital I instead of a lowercase l.",
    ],
    explanation: {
      headline: "The sender domain is spoofed.",
      detail:
        "The email tries to look like PayPal, but the sender uses paypaI-security.com, where the final character in paypaI is a capital I. Official PayPal email domains use paypal.com.",
      trustedSource: "paypal.com",
      suspiciousSource: "paypaI-security.com",
    },
  },
  {
    id: 31,
    difficulty: "Expert",
    from: "maria.chen@northbridge-payments.co",
    subject: "Updated vendor remittance details",
    body: "Hi Jordan, attaching the updated remittance details for this Friday's invoice batch. We are moving to a new receiving account after the bank merger. Please confirm once AP has updated the record.",
    verdict: "phishing",
    hints: [
      "Near-perfect business emails can still be risky when they change payment details.",
      "A payment change should be verified through a known channel outside the email thread.",
    ],
    explanation: {
      headline: "The email attempts a subtle payment diversion.",
      detail:
        "The language is realistic, but it asks the recipient to change vendor banking details. That kind of request should be confirmed by phone or an internal vendor portal before any update is made.",
      suspiciousSource: "northbridge-payments.co",
    },
  },
  {
    id: 42,
    difficulty: "Medium",
    from: "security@github.com",
    subject: "New sign-in to your account",
    body: "A new sign-in was detected from Chrome on macOS. If this was you, no action is needed. If this was not you, review your active sessions from GitHub.com.",
    verdict: "legitimate",
    hints: [
      "Look for whether the email sends you to a strange login page.",
      "This message tells you to go to the real service instead of using a suspicious link.",
    ],
    explanation: {
      headline: "The email uses a normal account security pattern.",
      detail:
        "It warns about account activity but does not ask for credentials inside the message. It directs the user to review sessions from the official site.",
      trustedSource: "github.com",
    },
  },
  {
    id: 43,
    difficulty: "Easy",
    from: "support@netflix-billing-update.example",
    subject: "Payment Failed - Update Required",
    body: "Your subscription has been suspended. Update your payment information immediately to continue watching.",
    verdict: "phishing",
    hints: [
      "The sender domain looks unusual.",
      "Urgent payment warnings are commonly used in phishing attacks."
    ],
    explanation: {
      headline: "The sender is not Netflix.",
      detail:
        "The email creates urgency and uses an unofficial domain. Legitimate billing notices come from official company domains.",
      suspiciousSource: "netflix-billing-update.example"
    }
  },

  {
    id: 44,
    difficulty: "Easy",
    from: "noreply@schooldistrict.org",
    subject: "School Calendar Updated",
    body: "The district calendar has been updated with upcoming holidays and teacher workdays. Visit the parent portal for details.",
    verdict: "legitimate",
    hints: [
      "Does the email request credentials?",
      "Informational announcements are often legitimate."
    ],
    explanation: {
      headline: "This is a normal informational email.",
      detail:
        "The message shares school information and does not pressure the user or request sensitive information.",
      trustedSource: "schooldistrict.org"
    }
  },

  {
    id: 45,
    difficulty: "Medium",
    from: "amazon-orders@delivery-update.net",
    subject: "Problem Delivering Your Package",
    body: "We could not deliver your package. Confirm your shipping address within 12 hours to avoid return fees.",
    verdict: "phishing",
    hints: [
      "Look at the sender domain.",
      "Major retailers usually send delivery notices from their own domains."
    ],
    explanation: {
      headline: "The sender is not Amazon.",
      detail:
        "The email impersonates Amazon but uses an unrelated domain and attempts to create urgency.",
      suspiciousSource: "delivery-update.net"
    }
  },

  {
    id: 46,
    difficulty: "Medium",
    from: "events@hackclub.org",
    subject: "Registration Confirmed",
    body: "Thanks for registering. Your seat has been reserved for Saturday's coding workshop.",
    verdict: "legitimate",
    hints: [
      "Consider whether the message requests sensitive information.",
      "Confirmation emails are often harmless."
    ],
    explanation: {
      headline: "This is a standard registration confirmation.",
      detail:
        "The email confirms an event registration and does not request credentials or financial information.",
      trustedSource: "hackclub.org"
    }
  },

  {
    id: 47,
    difficulty: "Hard",
    from: "alerts@microsoft-verification.net",
    subject: "Microsoft 365 Password Expiration",
    body: "Your password expires today. Log in using the secure portal below to avoid losing access.",
    verdict: "phishing",
    hints: [
      "Microsoft's official domains are well known.",
      "Password expiration emails are frequently spoofed."
    ],
    explanation: {
      headline: "The sender domain is not Microsoft.",
      detail:
        "Attackers often impersonate Microsoft to steal credentials through fake login pages.",
      suspiciousSource: "microsoft-verification.net",
      trustedSource: "microsoft.com"
    }
  },

  {
    id: 48,
    difficulty: "Medium",
    from: "security@bankofamerica.com",
    subject: "Debit Card Locked",
    body: "Your debit card was temporarily locked after multiple incorrect PIN attempts. Please contact customer support if this was not you.",
    verdict: "legitimate",
    hints: [
      "The email does not ask you to click a login link.",
      "It suggests contacting support directly."
    ],
    explanation: {
      headline: "This follows a common banking security pattern.",
      detail:
        "The message alerts the user but does not request credentials or direct them to a suspicious site.",
      trustedSource: "bankofamerica.com"
    }
  },

  {
    id: 49,
    difficulty: "Hard",
    from: "ceo@yourcompany-support.com",
    subject: "Need a Quick Favor",
    body: "Are you available right now? I need you to purchase several gift cards for a client meeting.",
    verdict: "phishing",
    hints: [
      "Gift card requests are a common scam.",
      "Check whether the sender is really the CEO."
    ],
    explanation: {
      headline: "This is a business email compromise attempt.",
      detail:
        "Attackers often impersonate executives and request gift cards or wire transfers.",
      suspiciousSource: "yourcompany-support.com"
    }
  },

  {
    id: 50,
    difficulty: "Easy",
    from: "no-reply@zoom.us",
    subject: "Meeting Invitation",
    body: "You have been invited to join a Zoom meeting tomorrow at 3:00 PM.",
    verdict: "legitimate",
    hints: [
      "Look for credential requests.",
      "Calendar invitations are generally routine."
    ],
    explanation: {
      headline: "This appears to be a normal meeting invitation.",
      detail:
        "The email provides scheduling information and does not request passwords.",
      trustedSource: "zoom.us"
    }
  },

  {
    id: 51,
    difficulty: "Expert",
    from: "security@okta-notifications.com",
    subject: "Multiple MFA Requests Detected",
    body: "Approve the latest sign-in request to stop the repeated notifications.",
    verdict: "phishing",
    hints: [
      "Think about MFA fatigue attacks.",
      "Users should never approve unexpected login requests."
    ],
    explanation: {
      headline: "The email encourages unsafe MFA behavior.",
      detail:
        "Attackers may bombard users with MFA prompts and trick them into approving one.",
      suspiciousSource: "okta-notifications.com"
    }
  },

  {
    id: 52,
    difficulty: "Medium",
    from: "careers@linkedin.com",
    subject: "Application Viewed",
    body: "One of your recent job applications was viewed by a recruiter.",
    verdict: "legitimate",
    hints: [
      "The message is informational.",
      "No credentials or payment information are requested."
    ],
    explanation: {
      headline: "This is a standard LinkedIn notification.",
      detail:
        "The email provides account activity information without requesting sensitive actions.",
      trustedSource: "linkedin.com"
    }
  },

  {
    id: 53,
    difficulty: "Hard",
    from: "it-helpdesk@cornell-edu-login.com",
    subject: "Mailbox Quota Exceeded",
    body: "Your mailbox has reached its storage limit. Verify your account to avoid losing emails.",
    verdict: "phishing",
    hints: [
      "Universities are frequent phishing targets.",
      "Check the sender domain carefully."
    ],
    explanation: {
      headline: "The sender is impersonating a university.",
      detail:
        "The domain imitates an educational institution but is not the official domain.",
      suspiciousSource: "cornell-edu-login.com"
    }
  },

  {
    id: 54,
    difficulty: "Easy",
    from: "orders@bestbuy.com",
    subject: "Order Ready for Pickup",
    body: "Your order is now ready for pickup at the selected store location.",
    verdict: "legitimate",
    hints: [
      "This is a routine order notification.",
      "No urgent action is required."
    ],
    explanation: {
      headline: "This is a normal retail notification.",
      detail:
        "The message informs the customer of order status without requesting credentials.",
      trustedSource: "bestbuy.com"
    }
  },

  {
    id: 55,
    difficulty: "Expert",
    from: "finance@vendor-payments.co",
    subject: "Quarterly Invoice Attached",
    body: "Please review the attached invoice and process payment before close of business today.",
    verdict: "phishing",
    hints: [
      "Unexpected invoices should be verified.",
      "The attachment may contain malware."
    ],
    explanation: {
      headline: "Unexpected invoice requests are risky.",
      detail:
        "Attackers frequently send fake invoices to trick employees into paying fraudulent bills or opening malicious attachments.",
      suspiciousSource: "vendor-payments.co"
    }
  },

  {
    id: 56,
    difficulty: "Medium",
    from: "noreply@dropbox.com",
    subject: "File Shared With You",
    body: "A colleague shared a file with you. Review it from your Dropbox account.",
    verdict: "legitimate",
    hints: [
      "The email directs users to their existing account.",
      "Shared-file notifications are common."
    ],
    explanation: {
      headline: "This resembles a standard file-sharing notification.",
      detail:
        "The email references the official service and does not request passwords directly.",
      trustedSource: "dropbox.com"
    }
  },

  {
    id: 57,
    difficulty: "Hard",
    from: "notifications@appleid-support.org",
    subject: "Apple ID Locked",
    body: "Due to suspicious activity, your Apple ID has been locked. Verify your account immediately.",
    verdict: "phishing",
    hints: [
      "The domain should raise suspicion.",
      "Apple generally uses official domains."
    ],
    explanation: {
      headline: "The sender is impersonating Apple.",
      detail:
        "The message creates urgency and uses an unofficial domain to harvest credentials.",
      suspiciousSource: "appleid-support.org",
      trustedSource: "apple.com"
    }
  },

  {
    id: 58,
    difficulty: "Easy",
    from: "notifications@duolingo.com",
    subject: "Weekly Progress Report",
    body: "You've completed 5 lessons this week. Keep up the great work!",
    verdict: "legitimate",
    hints: [
      "No action is demanded.",
      "This is a common activity summary."
    ],
    explanation: {
      headline: "This is a normal progress email.",
      detail:
        "The message summarizes account activity and does not request sensitive information.",
      trustedSource: "duolingo.com"
    }
  },

  {
    id: 59,
    difficulty: "Expert",
    from: "security@github-alerts.co",
    subject: "Repository Access Review",
    body: "Scan the QR code below to verify your repository permissions before access is revoked.",
    verdict: "phishing",
    hints: [
      "QR-code phishing is increasingly common.",
      "Check whether the sender uses GitHub's official domain."
    ],
    explanation: {
      headline: "This is a QR phishing attempt.",
      detail:
        "Attackers use QR codes to bypass email security filters and direct victims to fake login pages.",
      suspiciousSource: "github-alerts.co",
      trustedSource: "github.com"
    }
  },

  {
    id: 60,
    difficulty: "Medium",
    from: "notifications@discord.com",
    subject: "New Login Detected",
    body: "A login from a new device was detected. Review your account settings if this wasn't you.",
    verdict: "legitimate",
    hints: [
      "The email doesn't request credentials.",
      "It points users back to account settings."
    ],
    explanation: {
      headline: "This is a common security notification.",
      detail:
        "The message informs users about account activity without requesting sensitive information.",
      trustedSource: "discord.com"
    }
  },

  {
    id: 61,
    difficulty: "Hard",
    from: "payroll@company-benefits.net",
    subject: "Updated Direct Deposit Form",
    body: "Complete the attached form to avoid payroll interruptions next week.",
    verdict: "phishing",
    hints: [
      "Payroll scams often target employees.",
      "Unexpected forms requesting financial information should be verified."
    ],
    explanation: {
      headline: "This is likely a payroll phishing attempt.",
      detail:
        "The email pressures the recipient to submit financial information through an attachment.",
      suspiciousSource: "company-benefits.net"
    }
  },

  {
    id: 62,
    difficulty: "Expert",
    from: "alex.thomas@northbridqe.com",
    subject: "Follow-up on Contract Revision",
    body: "Per our discussion, I've attached the revised agreement. Please sign today so we can finalize the acquisition timeline.",
    verdict: "phishing",
    hints: [
      "Look very closely at the company name.",
      "One letter has been substituted."
    ],
    explanation: {
      headline: "The sender uses a typo-squatted domain.",
      detail:
        "The domain uses 'q' in place of 'g', a common trick designed to fool recipients during a quick glance.",
      suspiciousSource: "northbridqe.com"
    }
  }
];

export const difficultyOrder = ["Easy", "Medium", "Hard", "Expert"] as const;

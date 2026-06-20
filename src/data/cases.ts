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
];

export const difficultyOrder = ["Easy", "Medium", "Hard", "Expert"] as const;

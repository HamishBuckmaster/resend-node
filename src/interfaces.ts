import { ReactElement } from 'react';

export interface SendEmailData {
  /** Sender email address. */
  from: string;
  /** Recipient email address. Max 50. */
  to: string | string[];
  /** Bcc recipient email address. Max 50. */
  bcc?: string | string[];
  /** Cc recipient email address. Max 50. */
  cc?: string | string[];
  /** Reply-to email address. Max 50. */
  replyTo?: string | string[];
  /** Email subject. */
  subject?: string;
  /** The HTML version of the message. */
  text?: string;
  /** The plain text version of the message. */
  html?: string;
  /** The React version of the message. */
  react?: ReactElement;
  /** Attachments */
  attachments?: any[];
}

export interface SendEmailRequest {
  /** Sender email address. */
  from: string;
  /** Recipient email address. Max 50. */
  to: string | string[];
  /** Bcc recipient email address. Max 50. */
  bcc?: string | string[];
  /** Cc recipient email address. Max 50. */
  cc?: string | string[];
  /** Reply-to email address. Max 50. */
  reply_to?: string | string[];
  /** Email subject. */
  subject?: string;
  /** The HTML version of the message. */
  text?: string;
  /** The plain text version of the message. */
  html?: string;
  /** Attachments */
  attachments?: any[];
}

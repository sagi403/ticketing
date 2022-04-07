import { PaymentCreatedEvent, Publisher, Subjects } from "@slticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}

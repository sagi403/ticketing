import { Publisher, OrderCanceledEvent, Subjects } from "@slticketing/common";

export class OrderCanceledPublisher extends Publisher<OrderCanceledEvent> {
  readonly subject = Subjects.OrderCanceled;
}

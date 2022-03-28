import { Publisher, OrderCreatedEvent, Subjects } from "@slticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}

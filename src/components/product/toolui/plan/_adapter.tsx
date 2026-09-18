'use client';
import type { ComponentProps, HTMLAttributes } from 'react';
import { Accordion as A } from '@base-ui/react/accordion';
import { Collapsible as C } from '@base-ui/react/collapsible';
export { cn } from '@/lib/utils';
export function Card(p: HTMLAttributes<HTMLDivElement>) {
  return <div {...p} />;
}
export function CardHeader(p: HTMLAttributes<HTMLDivElement>) {
  return <div {...p} />;
}
export function CardContent(p: HTMLAttributes<HTMLDivElement>) {
  return <div {...p} />;
}
export function CardTitle(p: HTMLAttributes<HTMLHeadingElement>) {
  return <h4 {...p}>{p.children}</h4>;
}
export function CardDescription(p: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...p} />;
}
export function Accordion({
  type: _,
  collapsible: __,
  ...p
}: ComponentProps<typeof A.Root> & { type?: string; collapsible?: boolean }) {
  return <A.Root {...p} />;
}
export const AccordionItem = A.Item;
export const AccordionTrigger = A.Trigger;
export const AccordionContent = A.Panel;
export function Collapsible({
  asChild: _,
  ...p
}: ComponentProps<typeof C.Root> & { asChild?: boolean }) {
  return <C.Root {...p} />;
}
export const CollapsibleTrigger = C.Trigger;
export const CollapsibleContent = C.Panel;

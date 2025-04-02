# Order Detail Install Guide

## Introduction

**Order Detail Guide** sProvide a detailed invoice template for websites, optimized for seamless printing and professional presentation.

---

## Installation

Install the SDK via npm:

```bash
npm install order-detail-custom

```

or yarn

```bash
yarn add order-detail-custom

```

## Usage

### 1. Complete Component

Use the pre-built component that comes with ready-to-use UI and logic. Ideal for quick integration of PWA installation functionality.

```tsx
import { OrderDetail } from "order-detail-custom";

function App() {
  return (
    <OrderDetail businessData={businessData} invoiceDetailData={invoiceDetailData} contentRef={contentRef}/>;
  );
}
```

#### Props (Optional):

| Prop Name         | Type                | Description         | Default Value |
| :---------------- | :------------------ | :------------------ | :------------ |
| businessData      | TBusiness           | Business data       | {}            |
| invoiceDetailData | TInvoiceDetail      | Detail invoice data | {}            |
| contentRef        | Ref<HTMLDivElement> | Reference element   | null          |

## License

ISC Licensed. Copyright (c) Esollabs 2024.

"use client";

import { Heading } from "@/components/common/heading";
import { Button } from "@/components/ui/button";

const GlobalError = ({ reset }: { reset: () => void }) => (
  <html>
    <body>
      <Heading>Something went wrong!</Heading>
      <Button onClick={reset}>Try again</Button>
    </body>
  </html>
);

export default GlobalError;

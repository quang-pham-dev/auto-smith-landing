import { test, expect } from "@playwright/test";

const baseUrl = process.env.NEXT_PUBLIC_URL;

test("RootPage", async ({ page }) => {
  await page.goto(baseUrl as string);
  await expect(page).toHaveTitle("Int");
  const heading = page.getByRole("heading", {
    name: "Car search wizards",
  });
  await expect(heading).toBeVisible();
});

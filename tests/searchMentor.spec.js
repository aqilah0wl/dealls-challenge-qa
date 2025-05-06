const { test, expect } = require("@playwright/test");

// Data test berdasarkan valid dan invalid test case
const searchScenarios = [
  // ✅ Valid Cases
  { keyword: "frontend", shouldShowResult: true, description: "Bidang tertentu" },
  { keyword: "Frontend", shouldShowResult: true, description: "Huruf kapital vs kecil" },
  { keyword: "full stack", shouldShowResult: true, description: "Lebih dari satu kata" },

  // ❌ Invalid Cases
  { keyword: "asdafwgrkj", shouldShowResult: false, description: "Keyword tidak relevan" },
  { keyword: "", shouldShowResult: false, description: "Input kosong" },
  { keyword: "@@@", shouldShowResult: false, description: "Karakter spesial" },
];

searchScenarios.forEach(({ keyword, shouldShowResult, description }) => {
  test(`Search keyword "${keyword}" - ${description}`, async ({ page }) => {
    await page.goto("https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring");

    const searchInput = page.locator('input[id="searchMentor"]');
    await searchInput.fill(keyword);
    await page.keyboard.press("Enter");

    const results = page.locator('a[class*="MentorCard_mentor_card"]');

    if (shouldShowResult) {
      await expect(results.first()).toBeVisible();
    } else {
      await expect(results).toHaveCount(0); // pastikan tidak ada hasil
    }
  });
});

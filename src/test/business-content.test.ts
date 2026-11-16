import { describe, expect, it } from "vitest";

import { BUSINESS, REELS, SERVICES } from "@/lib/business-content";

describe("business information provided by the owner", () => {
  it("keeps exactly three blank reel slots", () => {
    expect(REELS).toHaveLength(3);
  });

  it("lists all five requested cleaning services", () => {
    expect(SERVICES.map((service) => service.name)).toEqual([
      "Residential Cleaning",
      "Deep Cleaning",
      "Move-In / Move-Out",
      "Post-Construction",
      "Carpet & Upholstery",
    ]);
  });

  it("uses the provided business phone and callable link", () => {
    expect(BUSINESS.phone).toBe("786-402-1347");
    expect(BUSINESS.phoneLink).toBe("tel:+17864021347");
  });
});
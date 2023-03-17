import React from "react";
import { render, screen } from "@testing-library/react";
import Pagination from "../components/pagination";

describe("Pagination", () => {
  it("renders the correct number of pages", () => {
    render(
      <Pagination
        itemsCount={20}
        pageSize={5}
        onPageChange={() => {}}
        currentPage={1}
      />
    );
    const pageLinks = screen.getAllByRole("button");
    expect(pageLinks).toHaveLength(4);
  });

  it("calls the onPageChange callback when a page number is clicked", () => {
    const onPageChange = jest.fn();
    render(
      <Pagination
        itemsCount={20}
        pageSize={5}
        onPageChange={onPageChange}
        currentPage={1}
      />
    );
    const secondPageLink = screen.getByText("2");
    secondPageLink.click();
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("renders the current page as active", () => {
    render(
      <Pagination
        itemsCount={20}
        pageSize={5}
        onPageChange={() => {}}
        currentPage={2}
      />
    );
    const secondPageLink = screen.getByText("2");
    expect(secondPageLink.parentElement).toHaveClass("active");
  });
});

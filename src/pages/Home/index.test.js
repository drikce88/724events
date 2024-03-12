import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(< Home />)
    expect(screen.getByTestId("listEvents")).toBeInTheDocument()
    /* Tester un événement de la liste */
    waitFor(() => {
      expect(screen.getByText("User&product MixUsers")).toBeInTheDocument()
    })
  })

  it("a list a people is displayed", () => {
    render(< Home />)
    expect(screen.getByTestId("listOfPeople")).toBeInTheDocument()
    /* Tester des personnes de la liste */
    expect(screen.getByText("Samira")).toBeInTheDocument()
    expect(screen.getByText('Christine')).toBeInTheDocument()
  })

  it("a footer is displayed", () => {
    render(< Home />)
    expect(screen.getByTestId("footer")).toBeInTheDocument()
    /* Tester le footer */
    expect(screen.getByText("01 23 45 67 89")).toBeInTheDocument()
  })

  it("an event card, with the last event, is displayed", () => {
    render(< Home />)
    waitFor(() => {
      expect(screen.getByTestId("lastEvent")).toBeInTheDocument()
      /* tester un élément de la derniere prestation */
      expect(screen.getByRole('date')).toBeInTheDocument()
    })
  })
});

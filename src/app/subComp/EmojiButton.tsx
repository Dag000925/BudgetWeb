import React from "react";

const EmojiButton: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="grid grid-cols-3 gap-4">
        {[
          {
            src: "/assets/icons/travel.png",
            alt: "Travel icon",
            text: "Travel",
          },
          {
            src: "/assets/icons/debt.png",
            alt: "Debt icon",
            text: "Debt",
          },
          {
            src: "/assets/icons/education.png",
            alt: "Education icon",
            text: "Education",
          },
          {
            src: "/assets/icons/enter.png",
            alt: "Entertainment icon",
            text: "Entertainment",
          },
          {
            src: "/assets/icons/gift.png",
            alt: "Gift icon",
            text: "Gift & Donations",
          },
          {
            src: "/assets/icons/gro.png",
            alt: "Groceries icon",
            text: "Groceries",
          },
          {
            src: "/assets/icons/health.png",
            alt: "Health icon",
            text: "Healthcare",
          },
          {
            src: "/assets/icons/member.png",
            alt: "Member icon",
            text: "Membership & Subscription",
          },
          {
            src: "/assets/icons/personal.png",
            alt: "Personal icon",
            text: "Personal Care",
          },
          {
            src: "/assets/icons/pet.png",
            alt: "Pet icon",
            text: "Pet",
          },
          {
            src: "/assets/icons/rent.png",
            alt: "Rent icon",
            text: "Housing",
          },
          {
            src: "/assets/icons/snack.png",
            alt: "Snack icon",
            text: "Snack",
          },
          {
            src: "/assets/icons/trans.png",
            alt: "Trans icon",
            text: "Transportation",
          },
          {
            src: "/assets/dog.png",
            alt: "custom icon",
            text: "Custom",
          },
        ].map((item, index) => (
          <button key={index} className="flex flex-col items-center justify-center box-content border-2 border-b-4 rounded-xl">
            <img src={item.src} alt={item.alt} className="w-12 h-12 mb-2" />
            <p className="text-xs text-center">{item.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiButton;

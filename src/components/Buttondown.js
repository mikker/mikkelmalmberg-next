import React, { useState, useEffect } from "react";

const stupidEmails = [
  "johann.wolfgang@goethe.biz",
  "bill@gatesnotes.com",
  "zuck@facebook.com",
  "a.merkel@bundestag.de",
  "mikkel@brnbw.com",
];

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateRandomEmail = () => sample(stupidEmails);

const Buttondown = ({ list, buttonTitle, ...props }) => {
  buttonTitle = buttonTitle || "Tilmeld";

  const [placeholder, setPlaceholder] = useState("");
  useEffect(() => {
    setPlaceholder(generateRandomEmail());
  });

  return (
    <form
      action={`https://buttondown.email/api/emails/embed-subscribe/${list}`}
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open(`https://buttondown.email/${list}`, "popupwindow");
      }}
      className="embeddable-buttondown-form"
    >
      <div className="flex flex-wrap sm:flex-nowrap content-stretch">
        <div className="flex-auto">
          <label htmlFor="bd-email" className="hidden">
            Enter your email
          </label>
          <input
            type="email"
            defaultValue=""
            name="email"
            id="bd-email"
            className="border-white dark:border-black rounded-none rounded-t-lg sm:rounded-t-none sm:rounded-l-lg input w-100"
            placeholder={placeholder}
          />
        </div>
        <input type="hidden" value="1" name="embed" />
        <input
          type="submit"
          value={buttonTitle}
          name="subscribe"
          className="bg-black rounded-none rounded-b-lg sm:rounded-b-none sm:rounded-r-lg w-full sm:w-auto justify-center text-gold-500 btn"
        />
      </div>
    </form>
  );
};

export default Buttondown;

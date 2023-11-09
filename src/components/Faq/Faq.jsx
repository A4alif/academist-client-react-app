import React from "react";

const Faq = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-7xl font-semibold text-center text-green-600">
            FAQ
          </h2>
          <div className="flex flex-col lg:flex-row items-center space-x-6 space-y-7 md:space-y-0 mt-14 lg:mt-0 py-14">
            <div className="flex-1">
              <div className="collapse collapse-plus bg-base-200 border border-b-2 border-b-green-400">
                <input type="radio" name="my-accordion-3" defaultChecked="checked" />
                <div className="collapse-title text-xl font-medium">
                  <h2 className="text-xl font-semibold">
                    How do I submit my assignment on Academist?
                  </h2>
                </div>
                <div className="collapse-content">
                  <p className="text-sm font-light leading-7">
                    To sunmit your assignment to Academist, log in to your
                    account and go to assignments page , there you will see all
                    the assignments. Click See details on assignment you want to
                    submit. After that you can submit your assignment.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border border-b-2 border-b-green-400">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <h2 className="text-xl font-semibold">
                    How do I evaluate and give marks to assignments on
                    Academist?
                  </h2>
                </div>
                <div className="collapse-content">
                  <p className="text-sm font-light leading-7">
                    {" "}
                    To evaluate assignments and give marks, go to the "Evaluate
                    Assignments" section. There, you can access submitted
                    assignments, review them, and provide your marks and
                    feedback. Your marks will contribute to the assignment's
                    overall score.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border border-b-2 border-b-green-400">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <h2 className="text-xl font-semibold">
                    What should I do if I encounter technical issues while using
                    Academist?
                  </h2>
                </div>
                <div className="collapse-content">
                  <p className="text-sm font-light leading-7">
                    {" "}
                    If you encounter technical issues, please visit the "Contact
                    Support" page on Academist. You can report the issue, and
                    our support team will assist you in resolving the problem as
                    quickly as possible.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border border-b-2 border-b-green-400">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <h2 className="text-xl font-semibold">
                    Is there a deadline for submitting assignments on Academist?
                  </h2>
                </div>
                <div className="collapse-content">
                  <p className="text-sm font-light leading-7">
                    {" "}
                    Yes, each assignment on Academist has a specific submission
                    deadline. You must submit your assignment before the
                    deadline to ensure it's eligible for evaluation. Be sure to
                    check the assignment details for the exact deadline.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="mt-14">
                <img
                  className="h-[500px] w-full object-cover"
                  src="https://i.postimg.cc/3wdXNS7M/FAQ.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

import Admonition from "@theme/Admonition";
import React from "react";

function CMToolWarning() {
  return (
    <Admonition type="warning">
      <p>
        Please note, development on CMTool is becoming increasingly difficult
        due to its aged codebase. The application's tech stack reached its end
        of life in 2020. As such, we are extremely limited to what changes we
        can make to the application.
      </p>
    </Admonition>
  );
}

export default CMToolWarning;

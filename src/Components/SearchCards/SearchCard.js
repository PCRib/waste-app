import React from "react";

export default function SearchCard(props) {
  return (
    <div>
      <div>{props.searchedWaste[0].title}</div>
      <div>
        <ul>
          <li>{props.searchedWaste[0].category}</li>
          {/* <li>{props.searchedWaste[0].body.replace(/&lt;li&gt;|&lt;ul&gt;|&lt;strong&gt;|&lt;|strong&gt;&lt;|li&gt;|ul&gt;|&amp;|nbsp;|strong|&|gt|/gi,"")}</li> */}
          <li>{props.searchedWaste[0].body.replace(/&|lt|li|gt|;|ul|strong|amp|nbsp|ampnbsp|ne|ag|/gi,"")}</li>
        </ul>
      </div>
    </div>
  );
}

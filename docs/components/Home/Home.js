import React from 'react';
import Demo from 'Demo/Demo';
import textDemoSpec from 'seek-style-guide/react/Text/Text.demo';
import buttonDemoSpec from 'seek-style-guide/react/Button/Button.demo';
import textFieldDemoSpec from 'seek-style-guide/react/fields/TextField/TextField.demo';
import autosuggestDemoSpec from 'seek-style-guide/react/fields/Autosuggest/Autosuggest.demo';
import textareaDemoSpec from 'seek-style-guide/react/fields/Textarea/Textarea.demo';
import monthPickerDemoSpec from 'seek-style-guide/react/fields/MonthPicker/MonthPicker.demo';
import checkboxDemoSpec from 'seek-style-guide/react/fields/Checkbox/Checkbox.demo';
import dropdownDemoSpec from 'seek-style-guide/react/fields/Dropdown/Dropdown.demo';
import ratingDemoSpec from 'seek-style-guide/react/Rating/Rating.demo';

export default function Home() {
  return (
    <div>

      <Demo spec={textDemoSpec} />
      <Demo spec={buttonDemoSpec} />
      <Demo spec={textFieldDemoSpec} />
      <Demo spec={autosuggestDemoSpec} />
      <Demo spec={textareaDemoSpec} />
      <Demo spec={monthPickerDemoSpec} />
      <Demo spec={checkboxDemoSpec} />
      <Demo spec={dropdownDemoSpec} />
      <Demo spec={ratingDemoSpec} />

    </div>
  );
}

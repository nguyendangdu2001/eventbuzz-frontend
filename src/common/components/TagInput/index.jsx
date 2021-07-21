import useSuggestionTags from "@hooks/api/queries/useSuggestionTags";
import useDebounce from "@hooks/useDebounce";
import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
const TagInput = ({ value, onChange }) => {
  const [key, setKey] = useState("");
  const keyDebounce = useDebounce(key, 500);
  const { data } = useSuggestionTags({ key: keyDebounce });
  const handleDelete = (i) => {
    onChange(value.filter((tag, index) => index !== i));
  };
  const handleAddition = ({ id, name }) => {
    onChange([...value, { id, name, isNew: id === name }]);
  };
  const suggestions = data?.tags?.edges
    ?.map((edge) => edge?.node)
    .filter((v, i) => !value?.some((tags) => tags?.name === v?.name));
  console.log(suggestions);
  return (
    <div className="relative group">
      <ReactTags
        tags={value}
        classNames={{
          tagInputField: "input",
          tag: "p-2 flex self-start space-x-1 bg-gray-200 rounded-md font-medium",
          selected: "flex space-x-1",
          remove: "ml-2",
          tags: "space-y-2",
          suggestions: "block absolute top-full left-0 right-0 h-32",
          tagInput: "relative",
          activeSuggestion: "block",
        }}
        // suggestions={suggestions}
        // suggestions={data?.tags?.edges?.map((edge) => edge?.node)}
        // suggestions={[
        //   { id: "USA", name: "USA" },
        //   { id: "Germany", name: "Germany" },
        //   { id: "Austria", name: "Austria" },
        //   { id: "Costa Rica", name: "Costa Rica" },
        //   { id: "Sri Lanka", name: "Sri Lanka" },
        //   { id: "Thailand", name: "Thailand" },
        // ]}

        inline={false}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        labelField={"name"}
        inputValue={key}
        // renderSuggestion={(tag, query) => <li className="p-2">{tag.name}</li>}
        handleInputChange={(value) => setKey(value)}
        // handleDrag={this.handleDrag}
        // delimiters={delimiters}
      />
      <div className="absolute left-0 right-0 hidden mt-1 bg-gray-100 rounded-md shadow group-focus-within:block top-full max-h-56">
        {suggestions?.map((v, i) => (
          <button
            className="block w-full p-2 font-medium text-left"
            type="button"
            onClick={() => handleAddition(v)}
          >
            {v.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagInput;

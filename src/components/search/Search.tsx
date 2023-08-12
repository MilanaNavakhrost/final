import { BiSearch } from "react-icons/bi";
import "../shared/header/header.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import _ from "lodash";
import { IBook } from "~/utils/types";

export const Search = ({
  searchStr,
  setSearchStr,
  setBooks,
}: {
  searchStr: string;
  setSearchStr: (s: string) => void;
  setBooks: (b: IBook[]) => void;
}) => {
  const searchRequest = useCallback(async () => {
    if (searchStr.length > 1) {
      const result = await (
        await fetch(`https://api.itbook.store/1.0/search/${searchStr}`)
      ).json();
      setBooks(result.books);
    }
  }, [searchStr]);

  const debounce = useMemo(
    () =>
      _.debounce(
        () => {
          void searchRequest();
        },
        1000,
        {
          trailing: true,
        }
      ),
    [searchRequest]
  );

  useEffect(() => {
    debounce();
  }, [debounce, searchStr]);

  return (
    <div className="header-input-box">
      <input
        type="text"
        className="header-input"
        placeholder="Search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchStr(e.target.value)
        }
      />
      <BiSearch className="header-icons search-icon" />
    </div>
  );
};

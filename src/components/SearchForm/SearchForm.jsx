import {useState} from "react";
import PropTypes from "prop-types";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {SearchHeader, SearchForma, Input, SearchBtn} from "./SearchForm.styled";
import {BsSearch} from "react-icons/bs";

function SearchForm(props) {
  const [query,setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim())
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (!query) {
      toast.info('Please enter something', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return
    }
    props.onSubmit(query)
    setQuery('')
  }


  return (
    <SearchHeader>
      <SearchForma onSubmit={handleSubmit}>
        <Input type="text" autoComplete='off' autoFocus name='query' value={query}
               onChange={handleChange}/>
        <SearchBtn type='submit'>{<BsSearch style={{verticalAlign: "middle"}}/>}</SearchBtn>
      </SearchForma>
    </SearchHeader>
  );

}

export default SearchForm;
SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

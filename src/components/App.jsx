import {useState, useEffect} from 'react'
import {ToastContainer, toast} from 'react-toastify';
import {Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as API from '../service/api.js'

import SearchForm from "./SearchForm/SearchForm";
import Modal from "./Modal/Modal";
import {GalleryList} from "./GalleryList/GalleryList";
import {LoadMore} from "./LoadMore/LoadMore";
import {GlobalStyle, Container} from "./GlobalStyle.styled";
import {Loader} from "./Loader/Loader";


function App() {
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)
  const [alt, setAlt] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [totalHits, setTotalHits] = useState(null)


  useEffect(() => {
      if (!query) {
        return;
      }
      setLoading(true)

      async function fetchImg(page, query) {
        try {
          const getImages = await API.fetchImages(page, query);
          setTotalHits(getImages.total)
          const imageHits = getImages.hits
          if (!imageHits.length) {
            toast.warning(
              'No results were found for your search, please try something else.',
              {transition: Zoom, position: 'top-left'}
            );
          }

          setImages(prevState => [...prevState, ...imageHits])
          setLoading(false)

          if (page > 1) {
            const CARD_HEIGHT = 300;
            window.scrollBy({
              top: CARD_HEIGHT * 2,
              behavior: 'smooth',
            });
          }

        } catch (error) {
          setError(error);
          setLoading(false);
        }

      }

      fetchImg(page, query)
    },
    [query, page]
  )


  const resetState = () => {
    setQuery('')
    setPage(1)
    setImages([])
    setSelectedImage(null)
    setAlt(null)
    setTotalHits(null)
  }

  const handleFormSubmit = searchQuery => {
    if (query === searchQuery) {
      return
    }
    resetState()
    setQuery(searchQuery)

  }
  const handleImageSelect = (largeImageUrl, tags) => {
    setSelectedImage(largeImageUrl)
    setAlt(tags)
  }
  const closeModal = () => {
    setSelectedImage(null)
  }
  const loadMore = () => {
    setPage(page + 1)

  }


  return (
    <Container>
      <SearchForm onSubmit={handleFormSubmit}/>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover/>
      {error && (
        <h1 style={{color: 'orangered', textAlign: 'center'}}>
          {error.message}
        </h1>
      )}
      {images.length > 0 && (
        <GalleryList images={images} selectedImage={handleImageSelect}/>)}
      {images.length > 0 && images.length !== totalHits && (<LoadMore onClick={loadMore}/>)}
      {selectedImage && (
        <Modal selectedImage={selectedImage} tags={alt} onClose={closeModal}/>)}
      {loading && (<Loader onLoad={loading}/>)}
      <GlobalStyle/>
    </Container>
  )

}

export default App

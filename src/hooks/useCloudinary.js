import { useState, useEffect, useCallback } from 'react';
import { imageLink, tagJsonLink } from '../api/cloudinary';

const useCloudinary = path => {
  const [imageLinks, setImageLinks] = useState([]);
  const [error, setError] = useState('');

  // parse and convert the json array into an array of image links
  const toImageLinks = jsonArray =>
    jsonArray.map(obj => {
      const { public_id, format, version, type } = obj;
      // public_id is path + fileName
      return imageLink({
        path: public_id,
        fileName: null,
        format,
        version,
        type
      });
    });

  // async fetch the json using a tag that's written like paths
  // since this func is called inside useEffect...
  // ...wrap it in useCallback since being in useEffect's
  // dependency array means each time the function changes, side effect occurs
  const fetchTagJson = useCallback(async path => {
    const res = await fetch(tagJsonLink(path));
    const data = await res.json();
    console.log('data', data);
    const jsonArray = data.resources;
    setImageLinks(toImageLinks(jsonArray));
  }, []);

  useEffect(() => {
    try {
      // get the json from path relative to jinhii-site
      fetchTagJson(path);
    } catch (e) {
      setError(e);
      throw e;
      /* throw Error("can't fetch json from " + path); */
    }
  }, [fetchTagJson, path]);
  return [imageLinks, error];
};

export default useCloudinary;

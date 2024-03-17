import { useState } from 'react';
import { linkIcon, submit } from '../assets';

const SearchForm = () => {
    const [article, setArticle] = useState({
        url: "",
        summary: ""
    });

    const handleSubmit = (e) => {

    }

    return (
        <form
            onSubmit={handleSubmit}
            className="relative flex justify-center items-center"
        >
            <img
                src={linkIcon}
                alt="link icon"
                className="absolute left-0 my-2 ml-3 w-5"
            />

            <input
                type="url"
                placeholder='Paste the article link'
                value={article.url}
                required
                onChange={(e) => setArticle({ ...article, url: e.target.value })}
                className="url_input peer"
            />

            <button
                type="submit"
                className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            >
                <img
                    src={submit}
                    alt="submit icon"
                    className=""
                />
            </button>
        </form>
    );
};

export default SearchForm;
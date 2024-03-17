import SearchForm from "./SearchForm";

const Summary = () => {
    return (
        <section className="mt-16 w-full max-w-xl ">
            <div className="flex flex-col w-full gap-2">
                {/* Article Search Form */}
                <SearchForm />
                
                {/* Browse URl History */}
            </div>

            {/* Display Results */}
        </section>
    );
};

export default Summary;
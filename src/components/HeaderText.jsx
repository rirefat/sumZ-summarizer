const HeaderText = () => {
    return (
        <>
            <h1 className='head_text'>
                Summarize Articles with
                <br className='max-md:hidden' />
                <span className="orange_gradient">
                    OpenAI GPT-4
                </span>
            </h1>
            <h2 className='desc'>
                Simplify your reading with SumZ, an open-source article summarizer that transforms length articles into clear and concise summaries.
            </h2>
        </>
    );
};

export default HeaderText;
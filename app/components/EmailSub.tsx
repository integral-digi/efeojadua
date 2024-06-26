const formElements = {
    name: "Subscribe for Insights",
    buttonText: "Subscribe",
    placeholder: "Enter your email here..."
}

const EmailSub = () => {
    return (    
        <section className="w-full h-24 bg-gray-900 rounded-md px-4 flex items-center justify-center">
            <section className="flex items-center space-x-16 w-full justify-center lg:space-x-0">
                <p className="text-white text-2xl font-bold leading-loose tracking-wide lg:hidden">
                    {formElements.name}
                </p>
                <section className="w-[60%] lg:w-full relative">
                    <input 
                        type="email" 
                        className="h-12 bg-white rounded pl-4 w-full text-zinc-900 font-medium" 
                        id={formElements.buttonText}
                        placeholder={formElements.placeholder}
                    />
                    <button 
                        type="submit" 
                        className="absolute top-1.5 right-2 flex items-center justify-center rounded-sm bg-zinc-900 p-2"
                    >
                        <p className="text-center text-white text-sm font-bold">
                            {formElements.buttonText}
                        </p>
                    </button>
                </section>
            </section>
        </section>
    )
}

export default EmailSub;
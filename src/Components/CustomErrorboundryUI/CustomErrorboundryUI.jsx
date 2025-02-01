import { ErrorBoundary } from "react-error-boundary";

function CustomErrorboundryUI({error,resetErrorBoundry}) {
    console.log("sjfif" , error.status)
    return <div className="h-[100vh] flex justify-center items-center px-6">
        <div role="alert" className=" alert alert-error">
        <p>Somthing went wrong</p>
        <pre>{error?.message}</pre>
        <button onClick={resetErrorBoundry}>Try again</button> 
        </div>
        
    </div>
}

export function CustomErrorboundry({children}){
return (
    <ErrorBoundary 
    FallbackComponent={CustomErrorboundryUI}
    onReset={()=> window.location.reload()}
    >

        {children}
    </ErrorBoundary>
)
}
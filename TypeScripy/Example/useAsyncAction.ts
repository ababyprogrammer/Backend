import { useState } from /**The address of your file */;

export type ActionProps<R, I = undefined> = {
    onExecute: (input?: I) => Promise<R>,
    onSucceed?: (result: R) => void,
    onFailure?: (error: any) => void
}

export type ActionResult<R, I = undefined> = {
    isExecuting: boolean,
    result?: R,
    error?: any
    execute: (input?: I) => void,
}

export default function useAsyncAction<R, I = undefined>(config: ActionProps<R, I>): ActionResult<R, I> {

    const [isExecuting, setIsExecuting] = useState<boolean>(false)
    const [error, setError] = useState<any>();
    const [result, setResult] = useState<R>();

    const handleExecute = (input?: I) => {
        setIsExecuting(true)
        setError(undefined)
        setResult(undefined)

        config.onExecute(input)
            .then((result: R) => {
                setResult(result)
                if (config.onSucceed) config.onSucceed(result)
            })
            .catch((error) => {
                setError(error);
                if (config.onFailure) config.onFailure(error)
            })
            .finally(() => setIsExecuting(false))
    }

    return {
        isExecuting,
        result,
        error,
        execute: handleExecute
    }

}
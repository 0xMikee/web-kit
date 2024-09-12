import {Button} from "../../lib/main.ts";
import {ButtonColor, ButtonSize, ButtonVariant} from "../../lib/components/Button/Button.tsx";
import {Theme, useTheme} from "remix-themes";
import {useEffect} from "react";

const Index = () => {
    const [theme, setTheme, {definedBy}] = useTheme()

    useEffect(() => {
        console.log({theme, definedBy})
    }, [])

    return (
        <div>
            <Button size={ButtonSize.LARGE} color={ButtonColor.SECONDARY} variant={ButtonVariant.BORDERED} >
                Button
            </Button>
            <div style={{margin: '1rem 0'}}>
                <label style={{display: 'flex', gap: '8px'}}>
                    Theme
                    <select
                        name="theme"
                        value={definedBy === 'SYSTEM' ? '' : theme ?? ''}
                        onChange={e => {
                            const nextTheme = e.target.value

                            if (nextTheme === '') {
                                setTheme(null)
                            } else {
                                setTheme(nextTheme as Theme)
                            }
                        }}
                    >
                        <option value="">System</option>
                        <option value={Theme.LIGHT}>Light</option>
                        <option value={Theme.DARK}>Dark</option>
                    </select>
                </label>
            </div>
        </div>
    );
}

export default Index;
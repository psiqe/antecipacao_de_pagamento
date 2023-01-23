import errors from "../../utils/errors.json"
import styles from './Style.module.css'

interface InputErrorProps {
    type: any;
    field: string;
}

export function ValidationError({type, field}: InputErrorProps) {
    {console.log(type, field)}
    //@ts-expect-error
    return <p className={styles.errors_field}>{errors[field][type]}</p>
}
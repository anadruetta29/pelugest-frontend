export class Regex {

    public static readonly EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    public static readonly NAME = /^[\p{L}]{2,20}(?:[ '-][\p{L}]{2,20})*$/u;

    public static readonly SURNAME = /^[\p{L}]{2,20}(?:[ '-][\p{L}]{2,20})*$/u;

    public static readonly PASSWORD =  /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/]).{8,}$/
    
}
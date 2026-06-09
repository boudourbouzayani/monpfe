export interface Token{
    id:number;
    token:string;
    TokenType:string;
    expired : boolean;
    revoked: boolean;
}
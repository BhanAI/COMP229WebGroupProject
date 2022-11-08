export class Incident
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id: number,
    public date: string,
    public priority: string,
    public user: string,
    public narrative: string,
    public status: string
  ){}
}
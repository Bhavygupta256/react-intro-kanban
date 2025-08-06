export type Status = 'todo' | 'in-progress' | 'done'
export type Task = {
  title: string,
  status: Status,
  id: string,
  points?: number 
}

export const statuses: Status[] = [ 'todo', 'in-progress', 'done']

export const tasks: Array<Task> = [
    {title:"Do Market Research",status: 'todo', id: "BUS-1", points: 5}, 
    {title:"Competitor Analysis",status: 'todo', id: "BUS-2"}, 
    {title:"Develop Business Strategy",status: 'todo', id: "BUS-3", points: 8}, 
    {title:"Develop Marketing Strategy",status: 'todo', id: "BUS-4", points: 5},
    {title:"Develop Marketing Strategy",status: 'todo', id: "BUS-5", points: 5},
    {title:"Develop Marketing Strategy",status: 'done', id: "BUS-6", points: 5},
    {title:"Develop Marketing Strategy",status: 'in-progress', id: "BUS-7", points: 5},
    {title:"Develop Marketing Strategy",status: 'in-progress', id: "BUS-8", points: 5}
  ] 

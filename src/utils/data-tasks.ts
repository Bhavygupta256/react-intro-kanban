export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
  title: string,
  status: Status,
  priority: Priority,
  id: string,
  points?: number 
}

export const statuses: Status[] = [ 'todo', 'in-progress', 'done']
export const priorities: Priority[] = [ 'low', 'medium', 'high' ]

export const tasks: Array<Task> = [
    {title:"Do Market Research",status: 'todo', priority: 'high' , id: "BUS-1", points: 5}, 
    {title:"Competitor Analysis",status: 'todo', priority: 'high'  ,id: "BUS-2"}, 
    {title:"Develop Business Strategy",status: 'todo', priority: 'high'  ,id: "BUS-3", points: 8}, 
    {title:"Develop Marketing Strategy",status: 'todo', priority: 'high'  ,id: "BUS-4", points: 5},
    {title:"Develop Marketing Strategy",status: 'todo', priority: 'high'  ,id: "BUS-5", points: 5},
    {title:"Develop Marketing Strategy",status: 'done', priority: 'low'  ,id: "BUS-6", points: 5},
    {title:"Develop Marketing Strategy",status: 'in-progress', priority: 'low'  ,id: "BUS-7", points: 5},
    {title:"Develop Marketing Strategy",status: 'in-progress', priority: 'medium' , id: "BUS-8", points: 5}
  ] 

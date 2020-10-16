   /*
   Ici, je défini ce à quoi correspond la tâche.
    */
   export class Task{
    id: number = Date.now();
    title: string;
    status = false;
    duedate?: number;
    }

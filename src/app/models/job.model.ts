export interface JobModel {
    name: string;
    location: string;
    from: string;
    to: string;
    position: string;
    description: string;
    implementations: string;
    remote: boolean;
    url: string;
    locationUrl?: string;
}

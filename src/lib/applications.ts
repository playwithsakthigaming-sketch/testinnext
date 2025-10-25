
export type ApplicationStatus = 'Pending' | 'Accepted' | 'Rejected';

export type Application = {
  id: string;
  name: string;
  email: string;
  steamId: string;
  truckersmpUrl: string;
  truckershubId: string;
  password?: string;
  status: ApplicationStatus;
  submittedAt: string;
  avatar?: string;
};

export type ApplicationsData = {
  applications: Application[];
};

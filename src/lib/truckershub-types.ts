

export type VtcStats = {
    id: number;
    name: string;
    logo: string;
    live_drivers: number;
    total_drivers: number;
    total_distance: number;
    total_jobs: number;
    total_fuel: number;
};

export type LeaderboardUser = {
    username: string;
    value: number;
};

export type Job = {
    id: number;
    driver: {
        id: number;
        username: string;
        avatar: string;
    };
    start_city: string;
    start_company: string;
    destination_city: string;
    destination_company: string;
    cargo: string;
    cargo_mass: number;
    distance: number;
    fuel_used: number;
    money_made: number;
    status: 'finished' | 'ongoing' | 'cancelled';
    xp: number;
    max_speed: number;
    average_speed: number;
    damage: number;
    game: 'ETS2' | 'ATS';
    started_at: string;
};

export type Driver = {
    id: number;
    username: string;
    steam_id: string;
    role: {
        id: number;
        name: string;
    };
    avatar: string;
    total_km: number;
    total_jobs: number;
};

export type LiveDriver = {
    id: number;
    username: string;
    avatar: string;
    role: string;
    online: boolean;
    last_seen: string;
    map: {
        x: number;
        y: number;
        z: number;
    };
    location: {
        country: string;
        city: string;
        on_road: boolean;
        road_name: string;
    };
    truck: {
        make: string;
        model: string;
        license_plate: string;
    };
    job: {
        active: boolean;
        source_city?: string;
        destination_city?: string;
        cargo?: string;
    };
    game: {
        name: 'ETS2' | 'ATS';
        server_name: string;
    };
};

export type LiveDelivery = {
    id: number;
    driver_id: number;
    cargo: {
        name: string;
        mass: number;
    };
    source_city: string;
    destination_city: string;
    distance: {
        total: number;
        remaining: number;
    };
    eta: number; // In seconds
    started_at: string;
};

export type Skill = {
    id: string;
    name: string;
    max_level: number;
};

export type DriverSkill = {
    id: string;
    name: string;
    level: number;
};

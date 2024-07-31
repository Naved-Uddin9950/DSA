const toh = (disks, from, to, aux) => {
    if(disks === 1) {
        console.log(`Disk 1 moved from rod ${from} to rod ${to}`);
        return;
    }
    toh(disks - 1, from, aux, to);
    console.log(`Disk ${disks} moved from rod ${from} to rod ${to}`);
    toh(disks - 1, aux, to, from);
}

let disks = 3;
let from_rod = 'A';
let to_rod = 'C';
let aux_rod = 'B';

toh(disks, from_rod, to_rod, aux_rod);
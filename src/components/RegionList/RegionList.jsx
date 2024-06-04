import Link from "next/link";

// Afficher une liste des regions avec le format suivant :
// • Kanto (Gen 1) 
// • Johto (Gen 2) 

const RegionListItem = ({ id, name, generation }) => {
    return (
        <li>
            {/* <Link href={'/region/' + id}>{name} (Gen {generation})</Link> */}
            <Link href={`/region/${id}`}>{name} (Gen {generation})</Link>
        </li>
    );
};

const RegionList = ({ regions }) => {

    return (
        <ul>
            {regions.map(
                region => <RegionListItem key={region.id} {...region} />
            )}
        </ul>
    );
};

export default RegionList;
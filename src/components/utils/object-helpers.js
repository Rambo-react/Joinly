

export const updateObjectInArray = (items, itemId, ObjPropName, newObjProps) => {
    return items.map(u => {
        if (u[ObjPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
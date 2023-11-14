// Importing default
// The ./ tells Node that this is a file called helpers in the same directory we are currently in.
// The name helpful isn't magic, it can be called whatever.
import helpful from "./helpers"
// This would be looking for a helpers from node_modules.
import helpful from "helpers"

// Importing multiple
// Now the name does matter, it is trying to match it with what we exported.
import { sing, sort } from "./helpers"


// Importing default and multiple
import helpful, { sort, sing } from "./helpers"

helpful()
sort()
sing()
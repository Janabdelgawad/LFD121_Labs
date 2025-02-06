#include <stdlib.h>
#include <string.h>
#include <stdio.h>

// Return tweaked version of string s. Frees s.
char *tweak(char *s) {
  char *result; // Put result here

  asprintf(&result, "pre_%s_post", s);
  free(s);
  return result;


}

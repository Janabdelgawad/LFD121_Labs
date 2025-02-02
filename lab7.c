/* The function signature of get_queue */
unsigned int get_queue(message** messages);

/* The part of our code which processes messages... */
unsigned int queue_count = 0;

message* messages = malloc(sizeof(message) * MAX_MESSAGE_COUNT);

/* Process each message in order */
for (unsigned int i = 0; i < queue_count; i++) {
	process_message(messages[i]);
}

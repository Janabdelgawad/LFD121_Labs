def list_directory(dir_to_list):
  # Modify the directory so it only contains a-zA-Z0-9
  clean_dir = re.sub(r'[^a-zA-Z0-9]','', dir_to_list)

  # Then use subprocess in a safer way
  subprocess.run(["ls", "-l", clean_dir])

task default: %w[build]

desc 'Build the app'
task :build do
  sh 'rm -rf build'
  sh 'bundle exec middleman build'
  sh 'gulp buildcss'
end


namespace :deploy do
  def deploy(env)
    puts "Deploying to #{env}"
    system "TARGET=#{env} bundle exec middleman deploy"
  end

  task :staging do
    sh 'rm -rf build'
    sh 'bundle exec middleman build'
    sh 'rm -rf build/CNAME ; touch build/CNAME ; echo "staging.azbolt.com" > build/CNAME'
    sh 'gulp buildcss'
    deploy :staging
  end

  task :production do
    sh 'rm -rf build'
    sh 'bundle exec middleman build'
    sh 'gulp buildcss'
    deploy :production
  end
end
source_rubygems = 'https://rubygems.org'

ruby File.read(File.join(File.dirname(__FILE__), '.ruby-version')).strip

source source_rubygems do
  gem 'activerecord_any_of'
  gem 'activerecord-import'
  gem 'activerecord-rescue_from_duplicate', '~> 0.0.7'
  gem 'activerecord-session_store', '~>0.1.1'
  gem 'activeresource', '~>4.0.0'
  gem 'dotenv-rails', :require => 'dotenv/rails-now'
  gem 'environs'
  gem 'ffi'
  gem 'httpclient', '~> 2.6.0.1'
  gem 'mysql2', '~> 0.3.17'
  gem 'ops', '~> 0.4.0'
  gem 'rails', '4.2.4'
  gem 'rabl', '~> 0.8'
  gem 'rails-api', '~> 0.4.0', require: 'rails-api/action_controller/api'
  gem 'sass-rails', '~> 5.0'
  gem 'slim-rails'
  gem 'turbolinks'
  gem 'uglifier', '>= 1.3.0'
  gem 'unicorn-rails'
end

group :development, :test do
  source source_rubygems do
    gem 'pry'
    gem 'pry-byebug'
    gem 'pry-remote'
    gem 'guard-rails', '~> 0.7.2'
    gem 'guard-unicorn', '~>0.1.3'
    gem 'guard-bundler', '~>2.1.0'
  end
end

group :test do
  source source_rubygems do
    gem 'api_matchers'
    gem 'rspec'
    gem 'rspec-rails', '>= 2.13.2'
    gem 'rspec-collection_matchers'
    gem 'shoulda'
    gem 'shoulda-matchers'
    gem 'timecop'
  end
end

group :development do
  source source_rubygems do
    gem 'guard-rspec'
    gem 'sextant'
    gem 'spring'
  end
end

group :deploy, :development do
  source source_rubygems do
    gem 'capistrano',     '~> 2.15.5'
    gem 'capistrano-ext', '~> 1.2.1'
  end
end
